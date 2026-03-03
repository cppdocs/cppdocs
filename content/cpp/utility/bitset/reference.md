---
title: "std::bitset<N>::reference"
source_path: "cpp/utility/bitset/reference"
category: "utility"
---

The [std::bitset](/cpp/utility/bitset/) class includes std::bitset::reference as a publicly-accessible nested class. This class is used as a proxy object to allow users to interact with individual bits of a bitset, since standard C++ types (like references and pointers) are not built with enough precision to specify individual bits.

## Declarations
```cpp
class reference;
```

## Parameters
- `x`: value to assign

## Return value
*this

## Example
```cpp
#include <bitset>
#include <iostream>
 
int main()
{
    std::bitset<4> bs{0b1110};
    std::bitset<4>::reference ref = bs[2];
 
    auto info = [&](int id)
    {
        std::cout << id << ") bs: " << bs << "; ref bit: " << ref << '\n';
    };
 
    info(1);
    ref = false;
    info(2);
    ref = true;
    info(3);
    ref.flip();
    info(4);
    ref = bs[1]; // operator=( const reference& x )
    info(5);
 
    std::cout << "6) ~ref bit: " << ~ref << '\n';
}
```

## See also
- [operator[]](/cpp/utility/bitset/operator_at/)
