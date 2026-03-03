---
title: "std::codecvt<InternT,ExternT,StateT>::max_length, do_max_length"
source_path: "cpp/locale/codecvt/max_length"
header: "<locale>"
category: "locale"
since: "C++11"
---

1) Public member function, calls the member function do_max_length of the most derived class.

## Declarations
```cpp
public:
int max_length() const throw();
```
_(until C++11)_

```cpp
public:
int max_length() const noexcept;
```
_(since C++11)_

```cpp
protected:
virtual int do_max_length() const throw();
```
_(until C++11)_

```cpp
protected:
virtual int do_max_length() const noexcept;
```
_(since C++11)_

## Return value
The maximum number of ExternT characters that could be consumed if converted by [in()](/cpp/locale/codecvt/in/) to produce one InternT character.

## Notes
If the encoding is state-dependent (encoding() == -1), then more than max_length() external characters may be consumed to produce one internal character.

## Example
```cpp
#include <codecvt>
#include <iostream>
#include <locale>
 
int main()
{
    std::cout << "In codecvt_utf8, the longest multibyte character is "
              << std::codecvt_utf8<wchar_t>().max_length() << " bytes long\n";
 
    std::cout << "In header-consuming codecvt_utf8, the longest multibyte character is "
              << std::codecvt_utf8<wchar_t,
                                   0x10ffff,
                                   std::consume_header>().max_length() << " bytes long\n";
 
    std::cout << "In this system's en_US.utf8, the longest multibyte character is "
              << std::use_facet<std::codecvt<wchar_t, char, std::mbstate_t>>(
                     std::locale("en_US.utf8")
                 ).max_length() << " bytes long\n";
 
    std::cout << "In this system's zh_CN.gb18030, the longest multibyte character is "
              << std::use_facet<std::codecvt<wchar_t, char, std::mbstate_t>>(
                     std::locale("zh_CN.gb18030")
                 ).max_length() << " bytes long\n";
}
```

## See also
- [do_encoding](/cpp/locale/codecvt/encoding/)
