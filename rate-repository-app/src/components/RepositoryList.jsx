import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState, useEffect } from 'react';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories }) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;


  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item})=><RepositoryItem item={item}/>}
      // other props
    />
  );
};

const RepositoryList = () => {
  const {repositories} = useRepositories()

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;