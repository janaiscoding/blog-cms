const Comment = ({
  name,
  comment,
  time,
  id,
}: {
  name: string;
  comment: string;
  time: any;
  id: string;
}) => {
  return (
    <div className="bg-purewhite p-4 flex flex-col gap-2 shadow-md max-w-md">
      <p className="text-black font-bold text-xl">{name}</p>
      <p className="">{comment}</p>
      <p className="text-grey text-sm font-italic">
        Written on {new Date(time).toLocaleDateString()},{" "}
        {new Date(time).toLocaleTimeString()}
      </p>
      <p>Comment id: {id}</p>
    </div>
  );
};

export default Comment;
