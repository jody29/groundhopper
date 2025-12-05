import * as React from 'react';
import { Text, View } from 'react-native';

import { IconSymbol } from '@/src/components/ui/icon-symbol';

interface HeaderProps {
  subtitle?: string;
  subtitleIcon?: 'house.fill' | 'paperplane.fill' | 'chevron.left.forwardslash.chevron.right' | 'chevron.right';
  title: string;
  children?: React.ReactNode;
}

export function Header({ subtitle, subtitleIcon, title, children }: HeaderProps) {
  return (
    <View className="bg-[#B91C1C] px-4 py-6">
      {(subtitle || subtitleIcon) && (
        <View className="mb-2 flex-row items-center gap-2">
          {subtitleIcon && <IconSymbol name={subtitleIcon} size={16} color="#FCA5A5" />}

          {subtitle && <Text className="text-[14px] font-medium text-[#FCA5A5]">{subtitle}</Text>}
        </View>
      )}

      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text className="text-[24px] font-bold uppercase text-white">{title}</Text>
        </View>

        {/* eslint-disable-next-line react-extra/no-leaked-conditional-rendering */}
        {children && <View className="ml-4">{children}</View>}
      </View>
    </View>
  );
}
