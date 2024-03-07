import Card from '../Card';

function CardItems({ messages, onDelete }) {
  return (
    // eslint-disable-next-line
    <>
      {/* refactoring : undefined 처리 최적화 */}
      {messages &&
        messages.map((message) => (
          <Card
            key={message.id}
            id={message.id}
            src={message.profileImageURL}
            name={message.sender}
            cardFont={message.font}
            userState={message.relationship}
            cardContent={message.content}
            cardCreatedAt={message.createdAt}
            onDelete={onDelete}
          />
        ))}
    </>
  );
}

export default CardItems;
