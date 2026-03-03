---
title: "std::valarray<T>::operator+,-,~,!"
source_path: "cpp/numeric/valarray/operator"
category: "numeric"
---

Applies unary operators to each element in the numeric array.

## Declarations
```cpp
valarray<T> operator+() const;
```

```cpp
valarray<T> operator-() const;
```

```cpp
valarray<T> operator~() const;
```

```cpp
valarray<bool> operator!() const;
```

## Return value
A numeric array containing elements with values obtained by applying corresponding operator to the values in *this.

## Notes
Each of the operators can only be instantiated if the following requirements are met:

The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <iostream>
#include <string_view>
#include <valarray>
 
template<typename T>
void print(std::string_view const note,
           std::valarray<T> const vala, // by-value, see Notes above
           std::string_view const term = "\n")
{
    std::cout << note << std::boolalpha << std::showpos;
    for (T const element : vala)
        std::cout << '\t' << element;
    std::cout << term;
}
 
int main()
{
    std::valarray<int> x{1, 2, 3, 4};
    print<int>("x: ", x);
    print<int>("+x: ", +x);
    print<int>("+ + x: ", + + x);
    print<int>("-x: ", -x);
    print<int>("- - x: ", - - x, "\n\n");
 
    std::valarray<short> y{0, 1, -1, 0x7fff};
    print<short>("y: ", y);
    print<short>("~y: ", ~y);
    print<short>("~~y: ", ~~y, "\n\n");
 
    std::valarray<bool> z{true, false};
    print<bool>("z: ", z);
    print<bool>("!z: ", !z);
    print<bool>("!!z: ", !!z);
}
```

## See also
- [operator+=operator-=operator*=operator/=operator%=operator&=operator|=operator^=operator<<=operator>>=](/cpp/numeric/valarray/operator_arith2/)
- [operator+operator-operator*operator/operator%operator&operator|operator^operator<<operator>>operator&&operator||](/cpp/numeric/valarray/operator_arith3/)
