/* eslint-disable @next/next/no-async-client-component */
import { graphql } from "@/gql";
import { FormEvent, useState } from "react";
import { FileInput } from "../file-input/file-input";
import parseFileToBase64 from "@/utils/parse-file-to-base-64";

const fileUpload = graphql(/* GraphQL */ `
  mutation fileUpload {
    fileUpload
  }
`);

export default function FileUpload() {
  const [file, setFile] = useState<File>();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file");
      return;
    }

    try {
      console.log("Enviando");
      const str = await parseFileToBase64(file);
    } catch (error) {
      console.error("Error uploading CSV:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <FileInput onChange={setFile} />
        <button type='submit' className=''>
          Upload CSV
        </button>
      </form>
    </>
  );
}
