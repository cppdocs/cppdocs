---
title: "std::basic_filebuf<CharT,Traits>::seekoff"
source_path: "cpp/io/basic_filebuf/seekoff"
category: "io"
---

Repositions the file pointer, if possible, to the position that corresponds to exactly off characters from beginning, end, or current position of the file (depending on the value of dir).

## Declarations
```cpp
protected:
virtual pos_type seekoff( off_type off,
std::ios_base::seekdir dir,
std::ios_base::openmode which = std::ios_base::in | std::ios_base::out );
```

## Parameters
- `off`: relative position to set the position indicator to
- `dir`: defines base position to apply the relative offset to. It can be one of the following constants: Constant Explanation beg the beginning of a stream end the ending of a stream cur the current position of stream position indicator
- `which`: defines which of the input and/or output sequences to affect. It can be one or a combination of the following constants: Constant Explanation in affect the input sequence out affect the output sequence

## Return value
A newly constructed object of type pos_type which stores the resulting file position, or pos_type(off_type(-1)) on failure.

## Notes
seekoff() is called by std::basic_streambuf::pubseekoff, which is called by std::basic_istream::seekg, std::basic_ostream::seekp, std::basic_istream::tellg, and std::basic_ostream::tellp.

## Example
```cpp
#include <fstream>
#include <iostream>
#include <locale>
 
template<typename CharT>
int get_encoding(const std::basic_istream<CharT>& stream)
{
    using Facet = std::codecvt<CharT, char, std::mbstate_t>;
    return std::use_facet<Facet>(stream.getloc()).encoding();
}
 
int main()
{
    // prepare a 10-byte file holding 4 characters ("zß水𝄋") in UTF-8
    std::ofstream("text.txt") << "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9d\x84\x8b";
 
    // open using a non-converting encoding
    std::ifstream f1("text.txt");
    std::cout << "f1's locale's encoding() returns "
              << get_encoding(f1) << '\n'
              << "pubseekoff(3, beg) returns "
              << f1.rdbuf()->pubseekoff(3, std::ios_base::beg) << '\n'
              << "pubseekoff(0, end) returns "
              << f1.rdbuf()->pubseekoff(0, std::ios_base::end) << '\n';
 
    // open using UTF-8
    std::wifstream f2("text.txt");
    f2.imbue(std::locale("en_US.UTF-8"));
    std::cout << "f2's locale's encoding() returns "
              << get_encoding(f2) << '\n'
              << "pubseekoff(3, beg) returns "
              << f2.rdbuf()->pubseekoff(3, std::ios_base::beg) << '\n'
              << "pubseekoff(0, end) returns "
              << f2.rdbuf()->pubseekoff(0, std::ios_base::end) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 55 | C++98 | seekoff returned an undefinedinvalid stream position on failure | pos_type(off_type(-1))is returned on failure |

## See also
- [pubseekoff](/cpp/io/basic_streambuf/pubseekoff/)
- [seekpos](/cpp/io/basic_filebuf/seekpos/)
- [fseek](/cpp/io/c/fseek/)
