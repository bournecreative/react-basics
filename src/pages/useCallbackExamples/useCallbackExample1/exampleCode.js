export const exampleCode = `
// Setup useCallback with function and dependency

const getTarget = useCallback(
    (id) => {
      setSelected(id);
    },
    [setSelected]
  )
  
  ...code 

    <ChildComponent getTarget={getTarget} />

    
  // Child component

  export const ChildComponent = React.memo(({ getTarget }) => {
    ...code
  })
`;
