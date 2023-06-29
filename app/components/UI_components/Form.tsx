import { Editor } from "@tinymce/tinymce-react";
import Button from "@/app/components/UI_components/Button";
import Heading from "@/app/components/UI_components/Heading";
import { useRef } from "react";
import { NextPage } from "next";

interface FormProps {
  hTitle: string;
  title: string;
  text: string;
  pubd: boolean;
  setTitle: any;
  setText: any;
  setPubd: any;
  onSubmit: any;
}

const Form: NextPage<FormProps> = ({
  hTitle,
  title,
  text,
  pubd,
  setTitle,
  setText,
  setPubd,
  onSubmit,
}) => {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      setText(editorRef.current.getContent());
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Heading title={hTitle} />
      <div className="flex gap-2">
        <input
          className=" w-full h-10 rounded-md border border-softgrey px-4"
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="checkbox"
          className="h-10"
          checked={pubd}
          onChange={() => setPubd(!pubd)}
        />
      </div>
      <Editor
        apiKey="cziyxgttvagd4870gef3g0hoxqdxkks72x1uipv8ev5zmmbt"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={text}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <Button content={"Submit"} type={"submit"} onClick={log} />
    </form>
  );
};

export default Form;
