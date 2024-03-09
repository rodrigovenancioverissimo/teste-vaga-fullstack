/* eslint-disable @next/next/no-async-client-component */
import FileUpload from "../components/file-upload/file-upload";
import RecordsList from "../components/records-list/records-list";

export default function Home() {
  return (
    <>
      <FileUpload />
      <RecordsList />
    </>
  );
}
