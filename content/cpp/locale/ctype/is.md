---
title: "std::ctype<CharT>::is, std::ctype<CharT>::do_is"
source_path: "cpp/locale/ctype/is"
header: "<locale>"
category: "locale"
---

1,2) Public member function, calls the protected virtual member function do_is of the most derived class.

## Declarations
```cpp
public:
bool is( mask m, CharT c ) const;
```

```cpp
public:
const CharT* is( const CharT* low, const CharT* high, mask* vec ) const;
```

```cpp
protected:
virtual bool do_is( mask m, CharT c ) const;
```

```cpp
protected:
virtual const CharT* do_is( const CharT* low, const CharT* high, mask* vec ) const;
```

## Parameters
- `c`: character to classify
- `m`: mask to use for classifying a single character
- `low`: pointer to the first character in an array of characters to classify
- `high`: one past the end pointer for the array of characters to classify
- `vec`: pointer to the first element of the array of masks to fill

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <locale>
#include <utility>
#include <vector>
 
// utility wrapper to make locale-bound facets destructible
template<class Facet>
struct deletable_facet : Facet
{
    template<class ...Args>
    deletable_facet(Args&& ...args) : Facet(std::forward<Args>(args)...) {}
    ~deletable_facet() {}
};
 
int main()
{
    // classify a single character using the default locale
    auto& f = std::use_facet<std::ctype<char>>(std::locale());
    char c = '0';
    if (f.is(std::ctype_base::digit, c)) // or isdigit(c, locale());
        std::cout << '\'' << c << "' is a digit\n";
 
    // classify every character in a string using a named locale
    deletable_facet<std::ctype_byname<wchar_t>> f2("en_US.utf8");
    std::wstring str = L"z\u00df\u6c34\U0001d10b";
    std::vector<std::ctype_base::mask> vec(str.size());
    f2.is(&str[0], &str[0] + str.size(), &vec[0]);
 
    for (std::size_t n = 0; n < str.size(); ++n)
    {
        std::cout << std::hex << "U+" << static_cast<wint_t>(str[n]) << " is: ";
        if (vec[n] & std::ctype_base::alnum) 
            std::cout << "alnum";
        if (vec[n] & std::ctype_base::punct) 
            std::cout << "punct";
        std::cout << '\n';
    }
}
```

## See also
- [is](/cpp/locale/ctype_char/is/)
- [iswctype](/cpp/string/wide/iswctype/)
- [LC_CTYPE](/cpp/locale/lc_categories/)
