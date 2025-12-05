import * as React from 'react';

import { Tabs } from 'expo-router';

import { HapticTab } from '@/src/components/haptic-tab';
import { Header } from '@/src/components/layout/header';
import { IconSymbol } from '@/src/components/ui/icon-symbol';
import { Colors } from '@/src/constants/theme';
import { useColorScheme } from '@/src/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Seasons',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="calendar" color={color} />,
          header: () => <Header subtitle="Matchday" title="Season overview" subtitleIcon="house.fill" />,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
