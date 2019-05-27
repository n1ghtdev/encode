import { query } from './index';

export const getAlgorithmList = async () => {
  const sql = `select algo.id, algo.name, algo.title, algo.keysize, algo.blocksize, json_agg(json_build_object(
      'id', modes.id,
      'name', modes.name
    )) as modes
    from encrypt_algorithms as algo
    inner join algorithm_mode on algo.id = algorithm_mode.algorithm_id
    inner join modes on algorithm_mode.mode_id = modes.id
    group by algo.id, algo.name, algo.title, algo.keysize, algo.blocksize
    order by algo.name`;
  const result = await query(sql);
  return result.rows;
};
