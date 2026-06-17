'use client';

import { useEffect } from 'react';
import Clarity from '@microsoft/clarity';

const PROJECT_ID = 'x8i1h3k7vp';

export default function ClarityAnalytics() {
  useEffect(() => {
    Clarity.init(PROJECT_ID);
  }, []);

  return null;
}
