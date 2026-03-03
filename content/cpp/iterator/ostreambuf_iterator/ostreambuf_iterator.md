---
title: "std::ostreambuf_iterator<CharT,Traits>::ostreambuf_iterator"
source_path: "cpp/iterator/ostreambuf_iterator/ostreambuf_iterator"
category: "iterator"
since: "C++11"
---

1) Constructs the iterator with the private streambuf_type* member set to buffer and the [failed()](/cpp/iterator/ostreambuf_iterator/failed/) flag set to false. The behavior is undefined if buffer is a null pointer.

## Declarations
```cpp
ostreambuf_iterator( streambuf_type* buffer ) throw();
```
_(until C++11)_

```cpp
ostreambuf_iterator( streambuf_type* buffer ) noexcept;
```
_(since C++11)_

```cpp
ostreambuf_iterator( ostream_type& stream ) throw();
```
_(until C++11)_

```cpp
ostreambuf_iterator( ostream_type& stream ) noexcept;
```
_(since C++11)_

## Parameters
- `stream`: the output stream whose rdbuf() will be accessed by this iterator
- `buffer`: the output stream buffer to be accessed by this iterator

## Example
```cpp
#include <fstream>
#include <iostream>
#include <iterator>
 
int main()
{
    const char* file = "test.txt";
    {
        std::basic_filebuf<char> f;
        f.open(file, std::ios::out);
        std::ostreambuf_iterator<char> out1(&f);
        *out1 = 'a'; // writes to file via iterator
    }
 
    // read back from the file
    char a;
    std::cout << ((std::ifstream{file} >> a), a) << std::endl;
 
    std::ostreambuf_iterator<wchar_t> out2{std::wcout};
    *out2 = L'b';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 112 | C++98 | the requirement "the argument cannotbe null" was applied to overload (2) | applies to overload(1) instead |
| P2325R3 | C++20 | default constructor was provided as C++20iterators must be default_initializable | removed along withthe requirement |
