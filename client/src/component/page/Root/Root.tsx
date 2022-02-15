/* eslint-disable @typescript-eslint/naming-convention */
import { styled, withStyle } from "baseui";
import { Button, StyledBaseButton } from "baseui/button";
import { Combobox } from "baseui/combobox";
import { FormControl } from "baseui/form-control";
import { format } from "date-fns";
import type { VFC } from "react";
import { useCallback, useEffect, useState } from "react";
import { useStyletron } from "styletron-react";

import { BoxLayout } from "~/component/ui/Layout";
import { useGetSWR } from "~/hook";
import type { Employee } from "~/type/model";

export const Root: VFC = () => {
  const { isLoading, isError, data } = useGetSWR<Employee[]>("/api/employee");

  const [css] = useStyletron();
  const space = css({ marginBottom: "20px" });
  const [value, setValue] = useState<string>("");
  const [time, setTime] = useState(new Date());

  const handleSelect = useCallback((value) => {
    setValue(value);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      return setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!data) {
    return <div>Not found</div>;
  }

  const clock = format(time, "HH:mm:ss");
  const result = data.map((employee: Employee) => {
    return { id: employee.id, label: `${employee.first_name} ${employee.last_name}` };
  });

  return (
    <BoxLayout title="出勤登録">
      <Clock>{clock}</Clock>

      <FormRoot>
        <FormControl label="従業員を選択してください">
          <Combobox
            value={value}
            onChange={handleSelect}
            options={result}
            mapOptionToString={(option) => {
              return option.label;
            }}
          />
        </FormControl>

        <div className={space} />

        <Button overrides={{ BaseButton: CustomeButton }}>出勤する</Button>
      </FormRoot>
    </BoxLayout>
  );
};

const Clock = styled("h1", ({ $theme }) => {
  return {
    margin: 0,
    paddingTop: `${$theme.sizing.scale1600}`,

    textAlign: "center",
    fontSize: `${$theme.sizing.scale1600}`,
    lineHeight: `${$theme.sizing.scale1400}`,
  };
});

const FormRoot = styled("div", ({ $theme }) => {
  return {
    padding: `${$theme.sizing.scale1000}`,

    border: `1px solid ${$theme.colors.primary100}`,
    borderTop: 0,

    fontSize: `${$theme.sizing.scale800}`,
    lineHeight: `${$theme.sizing.scale1400}`,
  };
});

const CustomeButton = withStyle(StyledBaseButton, ({ $theme }) => {
  return {
    width: "100%",

    color: $theme.colors.primary100,
    backgroundColor: $theme.colors.backgroundInverseSecondary,

    ":hover": {
      backgroundColor: $theme.colors.backgroundInversePrimary,
    },
  };
});
