---
title: "std::basic_streambuf<CharT,Traits>::setg"
source_path: "cpp/io/basic_streambuf/setg"
category: "io"
---

Sets the values of the pointers defining the get area.

## Declarations
```cpp
protected:
void setg( char_type* gbeg, char_type* gcurr, char_type* gend );
```

## Parameters
- `gbeg`: pointer to the new beginning of the get area
- `gcurr`: pointer to the new current character (get pointer) in the get area
- `gend`: pointer to the new end of the get area

## Example
```cpp
#include <iostream>
#include <sstream>
 
class null_filter_buf : public std::streambuf
{
    std::streambuf* src;
    char ch; // single-byte buffer
protected:
    int underflow()
    {
        traits_type::int_type i;
        while ((i = src->sbumpc()) == '\0')
            ; // skip zeroes
        if (!traits_type::eq_int_type(i, traits_type::eof()))
        {
            ch = traits_type::to_char_type(i);
            setg(&ch, &ch, &ch+1); // make one read position available
        }
        return i;
    }
public:
    null_filter_buf(std::streambuf* buf) : src(buf)
    {
        setg(&ch, &ch + 1, &ch + 1); // buffer is initially full
    }
};
 
void filtered_read(std::istream& in)
{
    std::streambuf* orig = in.rdbuf();
    null_filter_buf buf(orig);
    in.rdbuf(&buf);
    for (char c; in.get(c);)
        std::cout << c;
    in.rdbuf(orig);
}
 
int main()
{
    char a[] = "This i\0s \0an e\0\0\0xample";
    std::istringstream in(std::string(std::begin(a), std::end(a)));
    filtered_read(in);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 4023 | C++98 | setg did not require the input sequence to be a valid range | requires |

## See also
- [setp](/cpp/io/basic_streambuf/setp/)
