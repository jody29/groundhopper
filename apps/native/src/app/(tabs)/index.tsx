import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';

import { useRouter } from 'expo-router';

import { useSeasons } from '@/src/hooks/queries/use-seasons';

export default function SeasonsScreen() {
  const router = useRouter();
  const { data, isLoading, error, refetch } = useSeasons();

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-5 dark:bg-black">
        <ActivityIndicator size="large" />

        <Text className="mt-3 text-base text-gray-900 dark:text-gray-100">Loading seasons...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-5 dark:bg-black">
        <Text className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Failed to load seasons</Text>

        <Text className="mb-4 text-center text-gray-900 dark:text-gray-100">{error.message}</Text>

        <Pressable onPress={() => refetch()} className="rounded-lg bg-blue-500 px-6 py-3 active:opacity-80">
          <Text className="font-semibold text-white">Retry</Text>
        </Pressable>
      </View>
    );
  }

  if (!data?.docs || data.docs.length === 0) {
    return (
      <View className="flex-1 items-center justify-center bg-white p-5 dark:bg-black">
        <Text className="text-xl font-semibold text-gray-900 dark:text-gray-100">No seasons found</Text>

        <Text className="mt-2 text-center text-gray-900 dark:text-gray-100">Add seasons in the CMS to get started</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white dark:bg-black">
      <FlatList
        data={data.docs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            className="mb-3 rounded-lg bg-gray-100 p-4 active:opacity-80 dark:bg-gray-800"
            onPress={() => router.push(`/season/${item.id}`)}>
            <Text className="text-xl font-semibold text-gray-900 dark:text-gray-100">{item.name}</Text>
          </Pressable>
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
