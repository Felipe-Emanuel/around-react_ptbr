import TrashIcon from "../images/trashIcon.svg";
import { Title } from "./Title";
import { usePopup } from "../data/hooks/usePopup";
import { apiOptions } from "./utils/config";
import { ShowedImage } from "./ImagePopup";
import { SkeletonCard } from "./load/SkeletonCard";
import { useApiContext } from "../data/hooks/useApiContext";
import { RemoveCardPopup } from "./RemoveCardPopup";
import { useEffect, useState } from "react";

export const Card = () => {
  const { cards, isLoading, getAllCards, removeCard, changeLikeState } =
    useApiContext();
  const { handleChangePopupState, isOpen } = usePopup();
  const [isShowedImage, setIsShowedImage] = useState(false);
  const [currentCardId, setCurrentCardId] = useState("");
  const [currentImage, setCurrentImaged] = useState({
    link: "",
    name: "",
  });

  useEffect(() => {
    getAllCards();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleOpenCard = (item) => {
    setCurrentImaged(item);

    setIsShowedImage((isShowedImage) => !isShowedImage);
  };

  const handleCloseCard = () =>
    setIsShowedImage((isShowedImage) => !isShowedImage);

  const handleRemoveCard = (e, cardId) => {
    e.preventDefault();
    removeCard(cardId);
    handleChangePopupState();
  };

  const handleLikeCard = (cardId, method) => changeLikeState(cardId, method);

  if (cards?.length <= 0) return <SkeletonCard />;

  return (
    <ul className="cards__ul">
      <ShowedImage
        isShowedImage={isShowedImage}
        link={currentImage.link}
        name={currentImage.name}
        handleClose={handleCloseCard}
      />
      <RemoveCardPopup
        currentCardId={currentCardId}
        handleChangePopupState={handleChangePopupState}
        handleRemoveCard={handleRemoveCard}
        isOpen={isOpen}
      />
      {cards?.map((card, i) => {
        if (!card) return null;
        const { likes, link, name, owner, _id } = card;
        const isOwner = owner?._id === apiOptions.user;
        const likeList = likes?.map((like) => like._id);
        const isLiked = likeList?.includes(apiOptions.user);
        const likeMethod = isLiked ? "DELETE" : "PUT";

        const showedImage = {
          link,
          name,
        };

        return (
          <li key={i} className="card">
            <img
              src={link}
              alt={name}
              className="card__image"
              onClick={() => handleOpenCard(showedImage)}
            />
            {isOwner && (
              <img
                src={TrashIcon}
                alt="deletar card"
                className="card__trash-button"
                onClick={() => {
                  setCurrentCardId(_id);
                  handleChangePopupState();
                }}
              />
            )}
            <div className="card__info">
              <Title className="card__title" title={name} />
              <div>
                <div
                  className={
                    isLiked ? "cardlike-button__liked" : "cardlike-button"
                  }
                  onClick={() => handleLikeCard(_id, likeMethod)}
                />
                <p className="cardlike-number">{likes?.length}</p>
              </div>
            </div>
          </li>
        );
      })}
      {isLoading && <div className="card__info-load" />}
    </ul>
  );
};
