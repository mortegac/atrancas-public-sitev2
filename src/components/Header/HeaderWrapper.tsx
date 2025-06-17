import { createClient } from "@/prismicio";
import Header from './index';

export default async function HeaderWrapper() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const navigation = await client.getSingle("navigation");

  return (
    <Header 
      settings={settings}
      navigation={navigation}
    />
  );
}
