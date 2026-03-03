---
title: "std::collate<CharT>::hash, std::collate<CharT>::do_hash"
source_path: "cpp/locale/collate/hash"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_hash of the most derived class.

## Declarations
```cpp
public:
long hash( const CharT* beg, const CharT* end ) const;
```

```cpp
protected:
virtual long do_hash( const CharT* beg, const CharT* end ) const;
```

## Parameters
- `beg`: pointer to the first character in the sequence to hash
- `end`: one past the end pointer for the sequence to hash

## Return value
The hash value that respects collation order.

## Example
```cpp
#include <iostream>
#include <locale>
#include <string>
#include <unordered_set>
 
struct CollateHash
{
    template<typename CharT>
    long operator()(const std::basic_string<CharT>& s) const
    {
        return std::use_facet<std::collate<CharT>>(std::locale()).hash(
                   &s[0], &s[0] + s.size()
               );
    }
};
struct CollateEq
{
    template<typename CharT>
    bool operator()(const std::basic_string<CharT>& s1,
                    const std::basic_string<CharT>& s2) const
    {
        return std::use_facet<std::collate<CharT>>(std::locale()).compare(
                     &s1[0], &s1[0] + s1.size(),
                     &s2[0], &s2[0] + s2.size()
               ) == 0;
    }
};
 
int main()
{
    std::locale::global(std::locale("en_US.utf8"));
    std::wcout.imbue(std::locale());
 
    std::unordered_set<std::wstring, CollateHash, CollateEq> s2 = {L"Foo", L"Bar"};
    for (auto& str : s2)
        std::wcout << str << ' ';
    std::cout << '\n';
}
```

## See also
- [std::hash<std::basic_string>](/cpp/string/basic_string/hash/)
