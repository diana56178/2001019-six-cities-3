import {mockOffers} from '../../../mock/offers.ts';
import OfferCard from '../offer-card/offer-card.tsx';

function OfferList(): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        mockOffers.map((offer) => (
          <OfferCard
            placeCardTitle={offer.title}
            placeCardType={offer.type}
            id={offer.id}
            key={offer.id}
            img={offer.previewImage}
            priceValue={offer.price}
            rating={offer.rating}
          />))
      }
    </div>
  );
}

export default OfferList;
