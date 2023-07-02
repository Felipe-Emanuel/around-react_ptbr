export const SkeletonCard = () => {
  const numberOfSkeletons = 6;
  const skeletonsArray = Array.from({ length: numberOfSkeletons }, (_, i) => (
    <div key={i} className="cards__load">
      <div className="cards__load-animation"></div>
    </div>
  ));

  return (
    <section id="cards-container" className="cards">
      <div className="skeletonLoading-cards">{skeletonsArray}</div>
    </section>
  );
};
