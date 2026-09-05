type ListingPriceProps = {
  price?: number;
};

const ListingPrice = ({ price }: ListingPriceProps) => (
  <div>
    <p className="text-[0.65rem] font-medium tracking-wide text-muted-foreground uppercase">
      From
    </p>
    <p className="text-base font-bold text-foreground sm:text-lg">
      {price && price > 0 ? `USD ${price}` : "On request"}
    </p>
  </div>
);

export default ListingPrice;
