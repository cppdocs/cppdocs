---
title: "std::basic_streambuf<CharT,Traits>::setp"
source_path: "cpp/io/basic_streambuf/setp"
category: "io"
---

Sets the values of the pointers defining the put area.

## Declarations
```cpp
protected:
void setp( char_type* pbeg, char_type* pend );
```

## Parameters
- `pbeg`: pointer to the new beginning of the put area
- `pend`: pointer to the new end of the put area

## Example
```cpp
#include <array>
#include <cstddef>
#include <iostream>
 
// Buffer for std::ostream implemented by std::array
template<std::size_t size, class CharT = char>
struct ArrayedStreamBuffer : std::basic_streambuf<CharT>
{
    using Base = std::basic_streambuf<CharT>;
    using char_type = typename Base::char_type;
 
    ArrayedStreamBuffer()
    {
        // put area pointers to work with “buffer”
        Base::setp(buffer.data(), buffer.data() + size);
    }
 
    void print_buffer()
    {
        for (char_type i : buffer)
        {
            if (i == 0)
                std::cout << "\\0";
            else
                std::cout << i;
            std::cout << ' ';
        }
        std::cout << '\n';
    }
 
private:
    std::array<char_type, size> buffer{}; // value-initialize “buffer”
};
 
int main()
{
    ArrayedStreamBuffer<10> streambuf;
    std::ostream stream(&streambuf);
 
    stream << "hello";
    stream << ",";
 
    streambuf.print_buffer();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4023 | C++98 | setp did not require the output sequence to be a valid range | requires |

## See also
- [setg](/cpp/io/basic_streambuf/setg/)
