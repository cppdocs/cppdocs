---
title: "std::codecvt<InternT,ExternT,StateT>::always_noconv, do_always_noconv"
source_path: "cpp/locale/codecvt/always_noconv"
header: "<locale>"
category: "locale"
since: "C++11"
---

1) Public member function, calls the member function do_always_noconv of the most derived class.

## Declarations
```cpp
public:
bool always_noconv() const throw();
```
_(until C++11)_

```cpp
public:
bool always_noconv() const noexcept;
```
_(since C++11)_

```cpp
protected:
virtual bool do_always_noconv() const throw();
```
_(until C++11)_

```cpp
protected:
virtual bool do_always_noconv() const noexcept;
```
_(since C++11)_

## Return value
true if this conversion facet performs no conversions, false otherwise.

## Notes
This function may be used e.g. in the implementation of [std::basic_filebuf::underflow](/cpp/io/basic_streambuf/underflow/) and [std::basic_filebuf::overflow](/cpp/io/basic_streambuf/overflow/) to use bulk character copy instead of calling [std::codecvt::in](/cpp/locale/codecvt/in/) or [std::codecvt::out](/cpp/locale/codecvt/out/) if it is known that the locale imbued in the [std::basic_filebuf](/cpp/io/basic_filebuf/) does not perform any conversions.

## Example
```cpp
#include <iostream>
#include <locale>
 
int main()
{
    std::cout << "The non-converting char<->char codecvt::always_noconv() returns " 
              << std::boolalpha
              << std::use_facet<std::codecvt<char, char, std::mbstate_t>>(
                    std::locale()
                 ).always_noconv() << '\n'
              << "while wchar_t<->char codecvt::always_noconv() returns "
              << std::use_facet<std::codecvt<wchar_t, char, std::mbstate_t>>(
                    std::locale()
                 ).always_noconv() << '\n';
}
```
