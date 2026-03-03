---
title: "std::messages<CharT>::open, std::messages<CharT>::do_open"
source_path: "cpp/locale/messages/open"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_open of the most derived class.

## Declarations
```cpp
public:
catalog open( const std::string& name, const std::locale& loc ) const;
```

```cpp
protected:
virtual catalog do_open( const std::string& name, const std::locale& loc ) const;
```

## Parameters
- `name`: name of the message catalog to open
- `loc`: a locale object that provides additional facets that may be required to read messages from the catalog, such as std::codecvt to perform wide/multibyte conversions

## Return value
The non-negative value of type catalog that can be used with [get()](/cpp/locale/messages/get/) and [close()](/cpp/locale/messages/close/). Returns a negative value if the catalog could not be opened.

## Notes
On POSIX systems, this function call usually translates to a call to [catopen()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/catopen.html). In GNU libstdc++, it calls [textdomain](https://gcc.gnu.org/onlinedocs/libstdc++/manual/facets.html).

The actual catalog location is implementation-defined: for the catalog "sed" (message catalogs installed with the Unix utility 'sed') in German locale, for example, the file opened by this function call may be /usr/lib/nls/msg/de_DE/sed.cat, /usr/lib/locale/de_DE/LC_MESSAGES/sed.cat, or /usr/share/locale/de/LC_MESSAGES/sed.mo.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    std::locale loc("de_DE.utf8");
    std::cout.imbue(loc);
    auto& facet = std::use_facet<std::messages<char>>(loc);
    auto cat = facet.open("sed", loc);
    if (cat < 0)
        std::cout << "Could not open german \"sed\" message catalog\n";
    else
        std::cout << "\"No match\" in German: "
                  << facet.get(cat, 0, 0, "No match") << '\n'
                  << "\"Memory exhausted\" in German: "
                  << facet.get(cat, 0, 0, "Memory exhausted") << '\n';
    facet.close(cat);
}
```
