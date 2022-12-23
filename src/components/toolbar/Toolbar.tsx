import React, { ChangeEvent, useCallback, useState } from 'react';
import { UrlObject } from 'url';

import { SearchIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

import getUrl from '@components/toolbar/toolbarHelper';

import useDebounce from '@hooks/debounce/useDebounce';

import { useAppDispatch, useAppSelector } from '@redux/hooks';
import launchSelector from '@redux/selectors/launch/launchSelector';
import { getLaunchesData } from '@redux/slices/launch/launchSlice';

function Toolbar(): JSX.Element {
  const launchData = useAppSelector(launchSelector);
  const dispatch = useAppDispatch();
  const t = useTranslations('Toolbar');
  const router = useRouter();
  const [searchBy, setSearchBy] = useState(launchData.searchBy);
  const debounce = useDebounce();
  const debounceDispatch = useCallback(
    debounce((value) => dispatch(getLaunchesData(value))),
    []
  );

  const setQuery = async (value: string): Promise<void> => {
    const { pathname } = router;
    const url: UrlObject = getUrl(pathname, value);

    await router.replace(url, url, {
      shallow: true,
    });
  };

  const handleChange = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    event.preventDefault();
    const { value } = event.target;
    const normalizedValue = value.trim();

    setSearchBy(value);
    debounceDispatch(normalizedValue);

    await setQuery(normalizedValue);
  };

  return (
    <Box mb={6}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.100" mt={2} />
        </InputLeftElement>
        <Input
          placeholder={t('search')}
          size="lg"
          type="text"
          value={searchBy}
          onChange={handleChange}
        />
      </InputGroup>
    </Box>
  );
}

export default Toolbar;
