import PropTypes from 'prop-types';
import { OptionList, OptionItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionList>
      {options.map((item, idx) => (
        <OptionItem key={idx}>
          <Button type="button" onClick={onLeaveFeedback} value={item}>
            {item}
          </Button>
        </OptionItem>
      ))}
    </OptionList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
