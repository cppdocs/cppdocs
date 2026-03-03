---
title: "std::locale::operator()"
source_path: "cpp/locale/locale/operator"
aliases:
  - "/cpp/locale/locale/operator()/"
category: "locale"
---

Compares two string arguments s1 and s2 according to the lexicographic comparison rules defined by this locale's [std::collate](/cpp/locale/collate/)<CharT> facet. This operator allows any locale object that has a collate facet to be used as a binary predicate in the standard algorithms (such as [std::sort](/cpp/algorithm/sort/)) and ordered containers (such as [std::set](/cpp/container/set/)).

## Declarations
```cpp
template< class CharT, class Traits, class Alloc >
bool operator()( const std::basic_string<CharT,Traits,Alloc>& s1,
const std::basic_string<CharT,Traits,Alloc>& s2 ) const;
```

## Parameters
- `s1`: the first string to compare
- `s2`: the second string to compare

## Return value
true if s1 is lexicographically less than s2, false otherwise.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <locale>
#include <string>
#include <vector>
 
int main()
{
    std::vector<std::wstring> v = {L"жил", L"был", L"пёс"};
    std::sort(v.begin(), v.end(), std::locale("ru_RU.UTF8"));
    assert(v[0] == L"был");
    assert(v[1] == L"жил");
    assert(v[2] == L"пёс");
}
```

## See also
- [collate](/cpp/locale/collate/)
