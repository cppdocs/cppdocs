---
title: "std::numpunct<CharT>::truename, do_truename, falsename, do_falsename"
source_path: "cpp/locale/numpunct/truefalsename"
header: "<locale>"
category: "locale"
---

1,2) Public member function, calls the member function do_truename and do_falsename of the most derived class respectively.

## Declarations
```cpp
public:
string_type truename() const;
```

```cpp
public:
string_type falsename() const;
```

```cpp
protected:
virtual string_type do_truename() const;
```

```cpp
protected:
virtual string_type do_falsename() const;
```

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <locale>
 
struct custom_tf : std::numpunct<char>
{
    std::string do_truename()  const { return {'t'}; }
    std::string do_falsename() const { return {'f'}; }
};
 
int main()
{
    std::cout << std::boolalpha;
 
    // default boolalpha output
    std::cout << "Default locale,\n"
                 "  boolalpha  true: " << true << "\n"
                 "  boolalpha false: " << false << "\n\n";
 
    // with custom_tf applied to locale
    std::cout.imbue(std::locale(std::cout.getloc(), new custom_tf));
    std::cout << "Locale with modified numpunct,\n"
                 "  boolalpha  true: " << true << "\n"
                 "  boolalpha false: " << false << '\n';
}
```
