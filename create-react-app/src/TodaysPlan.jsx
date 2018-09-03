const propTypes = {
  bored: PropTypes.bool,
};

const defaultProps = {
  bored: false,
};

function TodaysPlan(props) {
  const { bored } = props;
  const message = bored ? '놀러가자' : '하던일 열심히 마무리하기';
  
  return (
    <div className="message-container">
      {message}
    </div>
  );
}

TodaysPlan.propTypes = propTypes;
TodaysPlan.defaultProps = defaultProps;
