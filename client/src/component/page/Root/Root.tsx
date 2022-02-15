import { Button } from "baseui/button";
import { ButtonGroup } from "baseui/button-group";
import { StatefulInput } from "baseui/input";
import type { VFC } from "react";

import { useGetSWR } from "~/hook";

export const Root: VFC = () => {
  const { isLoading, isError, data } = useGetSWR("/api/employee");
  console.info("isLoading", isLoading);
  console.info("isError", isError);
  console.info("data", data);

  return (
    <div>
      <StatefulInput />
      <ButtonGroup>
        <Button isLoading>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </ButtonGroup>
    </div>
  );
};
