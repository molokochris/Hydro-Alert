import { View, Text } from "react-native";
import React, { useEffect } from "react";

export default function useScrollToBottom(scrollRef) {
  useEffect(() => {
    scrollRef.current.scrollToEnd({ animated: true });
  }, [scrollRef]);
}
