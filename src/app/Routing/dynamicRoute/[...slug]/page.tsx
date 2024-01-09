const DocsDetails = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div>
      <p>DocsDetails this is the</p>
      {params.slug.map((item: string, index: number) => {
        return <li key={index}>{item}</li>;
      })}
    </div>
  );
};

export default DocsDetails;
