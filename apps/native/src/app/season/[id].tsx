import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { useLocalSearchParams } from 'expo-router';

import { useMatches } from '@/src/hooks/queries/use-matches';
import type { Match } from '@/src/lib/api/types';

export default function SeasonDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, error } = useMatches(id);

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-5 dark:bg-black">
        <ActivityIndicator size="large" />

        <Text className="mt-3 text-base text-gray-900 dark:text-gray-100">Loading matches...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-5 dark:bg-black">
        <Text className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Failed to load matches</Text>

        <Text className="text-center text-gray-900 dark:text-gray-100">{error.message}</Text>
      </View>
    );
  }

  if (!data?.docs || data.docs.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-5 dark:bg-black">
        <Text className="text-xl font-semibold text-gray-900 dark:text-gray-100">No matches found</Text>

        <Text className="mt-2 text-center text-gray-900 dark:text-gray-100">No matches for this season yet</Text>
      </View>
    );
  }

  const renderMatch = ({ item }: { item: Match }) => (
    <View className="mb-3 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
      <Text className="text-base font-semibold text-gray-900 dark:text-gray-100">
        {item.homeTeam}
        vs

        {item.awayTeam}
      </Text>

      {item.seasonName && (
        <Text className="mt-1 text-xs text-gray-900 opacity-70 dark:text-gray-100">{item.seasonName}</Text>
      )}
    </View>
  );

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <FlatList
        data={data.docs}
        keyExtractor={(item) => item.id}
        renderItem={renderMatch}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
