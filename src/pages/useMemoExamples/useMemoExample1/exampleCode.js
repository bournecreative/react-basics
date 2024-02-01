export const exampleCode = `
  // Because we are passing a function to useMemo, we must wrap it in a useCallBack function.

  const computeLongestWord = useCallback((arr) => {
    if (!arr) {
      return [];
    }
    let longestWord = "";
    arr.forEach((sentence) => {
      sentence.split(" ").forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });
    console.log("Check, Did computelongestWord run", longestWord);
    return longestWord;
  }, []);

  
  const memoLongestWord = useMemo(
    () => computeLongestWord(data),
    [computeLongestWord, data]
  );
`;
