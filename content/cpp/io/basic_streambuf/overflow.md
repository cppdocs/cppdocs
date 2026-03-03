---
title: "std::basic_streambuf<CharT,Traits>::overflow"
source_path: "cpp/io/basic_streambuf/overflow"
category: "io"
---

Ensures that there is space at the [put area](/cpp/io/basic_streambuf/) for at least one character by saving some initial subsequence of characters starting at [pbase()](/cpp/io/basic_streambuf/pptr/) to the output sequence and updating the pointers to the put area (if needed). If ch is not Traits::eof() (i.e. Traits::eq_int_type(ch, Traits::eof()) != true), it is either put to the put area or directly saved to the output sequence.

## Declarations
```cpp
protected:
virtual int_type overflow( int_type ch = Traits::eof() );
```

## Parameters
- `ch`: the character to store in the put area

## Return value
Returns unspecified value not equal to Traits::eof() on success, Traits::eof() on failure.

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
    using int_type = typename Base::int_type;
 
    ArrayedStreamBuffer()
    {
        // put area pointers to work with 'buffer'
        Base::setp(buffer.data(), buffer.data() + size);
    }
 
    int_type overflow(int_type ch) 
    {
        std::cout << "overflow\n";
        return Base::overflow(ch);
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
    std::array<char_type, size> buffer{}; // value-initialize buffer
};
 
int main()
{
    ArrayedStreamBuffer<10> streambuf;
    std::ostream stream(&streambuf);
 
    stream << "hello";
    streambuf.print_buffer();
    if (stream.good())
        std::cout << "stream is good\n";
 
    stream << "world";
    streambuf.print_buffer();
    if (stream.good())
        std::cout << "stream is good\n";
 
    stream << "!";
    streambuf.print_buffer();
    if (!stream.good())
        std::cout << "stream is not good\n";
}
```

## See also
- [uflow](/cpp/io/basic_streambuf/uflow/)
- [underflow](/cpp/io/basic_streambuf/underflow/)
- [overflow](/cpp/io/basic_filebuf/overflow/)
- [overflow](/cpp/io/basic_stringbuf/overflow/)
- [overflow](/cpp/io/strstreambuf/overflow/)
