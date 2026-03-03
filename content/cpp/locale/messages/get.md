---
title: "std::messages<CharT>::get, std::messages<CharT>::do_get"
source_path: "cpp/locale/messages/get"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the protected virtual member function do_get of the most derived class.

## Declarations
```cpp
public:
string_type get( catalog cat, int set, int msgid, const string_type& dfault ) const;
```

```cpp
protected:
virtual string_type do_get( catalog cat, int set, int msgid, const string_type& dfault ) const;
```

## Parameters
- `cat`: identifier of message catalog obtained from open() and not yet passed to close()
- `set`: implementation-defined argument, message set in POSIX
- `msgid`: implementation-defined argument, message id in POSIX
- `dfault`: the string to look up in the catalog (if the catalog uses string look-up) and also the string to return in case of a failure

## Return value
The message from the catalog or a copy of dfault if none was found.

## Notes
On POSIX systems, this function call usually translates to a call to [catgets()](https://pubs.opengroup.org/onlinepubs/9699919799/functions/catgets.html), and the parameters set, msgid, and dfault are passed to catgets() as-is. In GNU libstdc++, this function ignores set and msgid and simply calls GNU gettext(dfault) in the required locale.

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
