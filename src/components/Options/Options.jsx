import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback("good")} className={styles.button}>
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={styles.button}
      >
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={styles.button}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={styles.resetButton}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
