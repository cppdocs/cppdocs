---
title: "std::codecvt<InternT,ExternT,StateT>::encoding, do_encoding"
source_path: "cpp/locale/codecvt/encoding"
header: "<locale>"
category: "locale"
since: "C++11"
---

1) Public member function, calls the member function do_encoding of the most derived class.

## Declarations
```cpp
public:
int encoding() const throw();
```
_(until C++11)_

```cpp
public:
int encoding() const noexcept;
```
_(since C++11)_

```cpp
protected:
virtual int do_encoding() const throw();
```
_(until C++11)_

```cpp
protected:
virtual int do_encoding() const noexcept;
```
_(since C++11)_

## Return value
The exact number of externT characters that correspond to one internT character, if constant. 0 if the number varies, -1 if the encoding is state-dependent.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    std::cout << "en_US.utf8 is a variable-length encoding, encoding() returns "
              << std::use_facet<std::codecvt<wchar_t, char, std::mbstate_t>>(
                     std::locale("en_US.utf8")
                 ).encoding() << '\n';
 
    std::cout << "zh_CN.gb18030 is also variable-length, encoding() == "
              << std::use_facet<std::codecvt<wchar_t, char, std::mbstate_t>>(
                     std::locale("zh_CN.gb18030")
                 ).encoding() << '\n';
 
    std::cout << "ru_RU.koi8r is a single-byte encoding, encoding() == "
              << std::use_facet<std::codecvt<wchar_t, char, std::mbstate_t>>(
                     std::locale("ru_RU.koi8r")
                 ).encoding() << '\n';
}
```

## See also
- [do_max_length](/cpp/locale/codecvt/max_length/)
