---
title: "Phases of translation"
source_path: "cpp/language/translation_phases"
category: "language"
---

C++ source files are processed by the compiler to produce C++ programs.

## Notes
Source files, translation units and translated translation units need not necessarily be stored as files, nor need there be any one-to-one correspondence between these entities and any external representation. The description is conceptual only, and does not specify any particular implementation.

The conversion performed at phase 5 can be controlled by command line options in some implementations: gcc and clang use -finput-charset to specify the encoding of the source character set, -fexec-charset and -fwide-exec-charset to specify the ordinary and wide literal encodings respectively, while Visual Studio 2015 Update 2 and later uses /source-charset and /execution-charset to specify the source character set and literal encoding respectively.

Some compilers do not implement instantiation units (also known as [template repositories](https://docs.oracle.com/cd/E18659_01/html/821-1383/bkagr.html#scrolltoc) or [template registries](http://www-01.ibm.com/support/knowledgecenter/SSXVZZ_12.1.0/com.ibm.xlcpp121.linux.doc/compiler_ref/fcat_template.html?lang=en)) and simply compile each template instantiation at phase 7, storing the code in the object file where it is implicitly or explicitly requested, and then the linker collapses these compiled instantiations into one at phase 9.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 787 | C++98 | the behavior was undefined if a non-empty source file doesnot end with a newline character at the end of phase 2 | add a terminating newlinecharacter in this case |
| CWG 1104 | C++98 | the alternative token <: caused std::vector<::std::string>to be treated as std::vector[:std::string> | added an additional lexingrule to address this case |
| CWG 1775 | C++11 | forming a universal character name inside a rawstring literal in phase 2 resulted in undefined behavior | made well-defined |
| CWG 2747 | C++98 | phase 2 checked the end-of-file splice after splicing, this is unnecessary | removed the check |
| P2621R3 | C++98 | universal character names were not allowed tobe formed by line splicing or token concatenation | allowed |

## See also
- [C documentation](/c/language/translation_phases/)
