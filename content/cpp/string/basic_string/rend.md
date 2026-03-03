---
title: "std::basic_string<CharT,Traits,Allocator>::rend, std::basic_string<CharT,Traits,Allocator>::crend"
source_path: "cpp/string/basic_string/rend"
category: "string"
since: "C++11"
---

Returns a reverse iterator to the character following the last character of the reversed string. It corresponds to the character preceding the first character of the non-reversed string. This character acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
reverse_iterator rend();
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
const_reverse_iterator rend() const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
const_reverse_iterator crend() const noexcept;
```
_(since C++11) (constexpr since C++20)_

## Return value
Reverse iterator to the character following the last character.

## Notes
libc++ backports crend() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::string p("[A man, a plan, a canal: Panama]");
    std::string q;
 
    std::copy(p.crbegin(), p.crend(), std::back_inserter(q));
    std::cout << "q = " << q << '\n';
 
    std::copy(q.crbegin(), q.crend(), p.rbegin());
    std::cout << "p = " << p << '\n';
}
```

## See also
- [rbegincrbegin](/cpp/string/basic_string/rbegin/)
- [rendcrend](/cpp/string/basic_string_view/rend/)
