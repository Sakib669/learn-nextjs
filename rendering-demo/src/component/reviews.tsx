type Props = {};

const Reviews = async ({}: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return (
    <div>
      <i>
        <u>Reviews</u>
      </i>
    </div>
  );
};

export default Reviews;
