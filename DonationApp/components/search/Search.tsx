import React from "react";
import styles from "./searchStyle";
import { TextInput, Pressable } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

interface SearchProps {
  onSearch: Function,
  placeholder: string
}

const Search = (props:SearchProps) => {
  const { onSearch, placeholder } = props

  const textInputRef = React.useRef(null);
  const [search,  setSearch] = React.useState('');
  
  const handleFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch(searchValue)
  }

  return (
    <Pressable style={ styles.searchInputContainer } onPress={() => handleFocus()} >
      <FontAwesomeIcon icon={faSearch} color={'#686c7a'} size={22}/>
      <TextInput 
      placeholder={placeholder}
      ref={textInputRef} 
      style={styles.searchInput} 
      value={search}
      onChangeText={ value => handleSearch(value) }
      />
    </Pressable>
  )
}

export default Search;