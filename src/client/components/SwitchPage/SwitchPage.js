import React, { useEffect } from "react";
import { Button } from "@shopify/polaris";
import CreateWidget from "../Widget/CreateWidget";
import HomePage from "../HomePage/HomePage";
import { useSelector, useDispatch } from "react-redux";
import { switchPage } from "../../actions/app_data";

export default function SwitchPage() {
  const page = useSelector((state) => state.app_data.page);

  const [state, setState] = React.useState(null);

  useEffect(() => {
    setState(page);
  }, [page]);

  let changeComponent = () => {
    switch (state) {
      case 1:
        return <HomePage></HomePage>;
      case 2:
        return <CreateWidget></CreateWidget>;
      default:
        break;
    }
  };
  return <div className="App-Main-Content">{changeComponent()}</div>;
}
