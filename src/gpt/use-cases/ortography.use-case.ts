interface Options {
  prompt: string;
}
export const OrtographiUseCase = async (option: Options) => {
  const { prompt } = option;
  return {
    prompt: prompt,
  };
};
