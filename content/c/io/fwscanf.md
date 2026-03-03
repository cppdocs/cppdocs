---
title: "wscanf, fwscanf, swscanf, wscanf_s, fwscanf_s, swscanf_s"
source_path: "c/io/fwscanf"
header: "<wchar.h>"
category: "c"
---

Reads data from the a variety of sources, interprets it according to format and stores the results into given locations.

## Declarations
```cpp
int wscanf( const wchar_t *format, ... );
```
_(since C95) (until C99)_

```cpp
int wscanf( const wchar_t *restrict format, ... );
```
_(since C99)_

```cpp
int fwscanf( FILE *stream, const wchar_t *format, ... );
```
_(since C95) (until C99)_

```cpp
int fwscanf( FILE *restrict stream,
const wchar_t *restrict format, ... );
```
_(since C99)_

```cpp
int swscanf( const wchar_t *buffer, const wchar_t *format, ... );
```
_(since C95) (until C99)_

```cpp
int swscanf( const wchar_t *restrict buffer,
const wchar_t *restrict format, ... );
```
_(since C99)_

```cpp
int wscanf_s( const wchar_t *restrict format, ...);
```
_(since C11)_

```cpp
int fwscanf_s( FILE *restrict stream,
const wchar_t *restrict format, ...);
```
_(since C11)_

```cpp
int swscanf_s( const wchar_t *restrict s,
const wchar_t *restrict format, ...);
```
_(since C11)_

## Parameters
- `stream`: input file stream to read from
- `buffer`: pointer to a null-terminated wide string to read from
- `format`: pointer to a null-terminated wide string specifying how to read the input
- `...`: receiving arguments.

## Example
```cpp
#include <stdio.h>
#include <wchar.h>
#include <string.h>
 
#define NUM_VARS   3
#define ERR_READ   2
#define ERR_WRITE  3
 
int main(void) {
    wchar_t state[64];
    wchar_t capital[64];
    unsigned int population = 0;
    int elevation = 0;
    int age = 0;
    float pi = 0;
 
#if INTERACTIVE_MODE
    wprintf(L"Enter state, age, and pi value: ");
    if (wscanf(L"%ls%d%f", state, &age, &pi) != NUM_VARS) {
        fprintf(stderr, "Error reading input.\n");
        return ERR_READ;
    }
#else
    wchar_t* input = L"California 170 3.141592";
    if (swscanf(input, L"%ls%d%f", state, &age, &pi) != NUM_VARS) {
        fprintf(stderr, "Error reading input.\n");
        return ERR_READ;
    }
#endif
    wprintf(L"State: %ls\nAge  : %d years\nPi   : %.5f\n\n", state, age, pi);
 
    FILE* fp = tmpfile();
    if (fp) {
        // write some data to temp file
        if (!fwprintf(fp, L"Mississippi Jackson 420000 807")) {
            fprintf(stderr, "Error writing to file.\n");
            fclose(fp);
            return ERR_WRITE;
        }
        // rewind file pointer
        rewind(fp);
 
        // read data into variables
        fwscanf(fp, L"%ls%ls%u%d", state, capital, &population, &elevation);
        wprintf(L"State  : %ls\nCapital: %ls\nJackson population (in 2020): %u\n"
                L"Highest elevation: %dft\n",
                state, capital, population, elevation);
        fclose(fp);
    }
}
```

## See also
- [vwscanfvfwscanfvswscanfvwscanf_svfwscanf_svswscanf_s](/c/io/vfwscanf/)
- [stdin](/c/io/std_streams/)
- [C++ documentation](/cpp/io/c/fwscanf/)
