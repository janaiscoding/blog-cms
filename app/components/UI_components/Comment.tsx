const Comment = ({
  name,
  comment,
  time,
}: {
  name: string;
  comment: string;
  time: any;
}) => {
  return (
    <div className="bg-purewhite p-4 flex flex-col gap-2 shadow-md">
      <p className="text-black font-bold text-xl">{name}</p>
      <p className="">{comment}</p>
      <p className="text-grey text-sm font-italic">Written on {new Date(time).toLocaleDateString()}</p>
    </div>
  );
};

export default Comment;
