import React, { useContext } from "react";
import { Typography, Radio, RadioChangeEvent } from "antd";

import { AuthPersistence } from "enums/authPersistence";
import { AuthPersistenceContext } from "wrappers/AuthPersistenceWrapper";

const { Title, Paragraph } = Typography;

function PersistenceList(): React.ReactElement {
  const { handleChangePersistenceType } = useContext(AuthPersistenceContext);

  function handleOnChange(e: RadioChangeEvent): void {
    handleChangePersistenceType(e.target.value);
  }

  return (
    <div>
      <Title level={3}>Authentication persistence overview</Title>
      <Paragraph>Local </Paragraph>
      <Paragraph>
        User would be persisted until explicitly signed out.
      </Paragraph>
      <Paragraph>Session</Paragraph>
      <Paragraph>
        User would only be persisted until current tab closes.
      </Paragraph>
      <Paragraph>Memory</Paragraph>
      <Paragraph>
        User would only be persisted until brower refreshes.
      </Paragraph>
      <div>
        <Paragraph>Select Authentication Persistence type</Paragraph>
        <Radio.Group
          defaultValue="local"
          buttonStyle="solid"
          onChange={handleOnChange}
        >
          <Radio.Button value={AuthPersistence.LOCAL}>Local</Radio.Button>
          <Radio.Button value={AuthPersistence.SESSION}>Session</Radio.Button>
          <Radio.Button value={AuthPersistence.NONE}>None</Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
}

export default PersistenceList;
