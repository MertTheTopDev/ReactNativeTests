import React, { PropsWithChildren } from "react";

type NameContextType = {
  name: String,
  setName: (value: string) => void,
  makeName: () => Vo
};

export const NameContext = React.createContext<NameContextType>({ name: '' });

export const NameContextProvider = ({ children }: PropsWithChildren) => {
  const [name, setName] = React.useState <string>('Mert')

  const changeName = (value: string) => setName(value);

  return (
    <NameContext.Provider value={{ name: name, setName:changeName }}>
      {children}
    </NameContext.Provider>
  )

}

// const myContext = React.useContext(NameContext);

// return (
//   <NameContextProvider>
//     <SafeAreaView style={{ flex: 1 }}>
//       <Text> {myContext.name} </Text>
//     </SafeAreaView>
//   </NameContextProvider>
// );